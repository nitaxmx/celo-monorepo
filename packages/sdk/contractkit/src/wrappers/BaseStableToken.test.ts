import Web3 from 'web3'
import { newKitFromWeb3 } from '../kit'
import { BaseStableTokenWrapper } from './BaseStableTokenWrapper'
import { StableToken } from '../generated/StableToken'

// TEST NOTES: balances defined in test-utils/migration-override

export function testStableToken<ST extends StableToken>(
  web3: Web3,
  stableTokenGetter: () => Promise<BaseStableTokenWrapper<ST>>,
  expectedName: string,
  expectedSymbol: string
) {
  const ONE_STABLE = web3.utils.toWei('1', 'ether')

  const kit = newKitFromWeb3(web3)
  let accounts: string[] = []
  let stableToken: BaseStableTokenWrapper<ST>

  beforeAll(async () => {
    accounts = await web3.eth.getAccounts()
    kit.defaultAccount = accounts[0]
    stableToken = await stableTokenGetter()
  })

  test('SBAT check balance', () =>
    expect(stableToken.balanceOf(accounts[0])).resolves.toBeBigNumber())
  test('SBAT check decimals', () => expect(stableToken.decimals()).resolves.toBe(18))
  test('SBAT check name', () => expect(stableToken.name()).resolves.toBe(expectedName))
  test('SBAT check symbol', () => expect(stableToken.symbol()).resolves.toBe(expectedSymbol))
  test('SBAT check totalSupply', () => expect(stableToken.totalSupply()).resolves.toBeBigNumber())

  test('SBAT transfer', async () => {
    const before = await stableToken.balanceOf(accounts[1])
    const tx = await stableToken.transfer(accounts[1], ONE_STABLE).send()
    await tx.waitReceipt()

    const after = await stableToken.balanceOf(accounts[1])
    expect(after.minus(before)).toEqBigNumber(ONE_STABLE)
  })

  test('SBAT approve spender', async () => {
    const before = await stableToken.allowance(accounts[0], accounts[1])
    expect(before).toEqBigNumber(0)

    await stableToken.approve(accounts[1], ONE_STABLE).send()
    const after = await stableToken.allowance(accounts[0], accounts[1])
    expect(after).toEqBigNumber(ONE_STABLE)
  })

  test('SBAT tranfer from', async () => {
    const before = await stableToken.balanceOf(accounts[3])
    // account1 approves account0
    await stableToken.approve(accounts[1], ONE_STABLE).send({ from: accounts[0] })

    const tx = await stableToken
      .transferFrom(accounts[0], accounts[3], ONE_STABLE)
      .send({ from: accounts[1] })
    await tx.waitReceipt()
    const after = await stableToken.balanceOf(accounts[3])
    expect(after.minus(before)).toEqBigNumber(ONE_STABLE)
  })
}