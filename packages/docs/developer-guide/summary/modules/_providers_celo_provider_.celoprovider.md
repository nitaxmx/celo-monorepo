# CeloProvider

## Hierarchy

* **CeloProvider**

## Index

### Constructors

* [constructor]()

### Properties

* [existingProvider]()
* [nonceLock]()
* [wallet]()

### Accessors

* [connected]()

### Methods

* [addAccount]()
* [getAccounts]()
* [isLocalAccount]()
* [removeAccount]()
* [send]()
* [stop]()
* [supportsSubscriptions]()

## Constructors

### constructor

+ **new CeloProvider**\(`existingProvider`: provider, `wallet`: [ReadOnlyWallet]()\): [_CeloProvider_]()

_Defined in_ [_packages/contractkit/src/providers/celo-provider.ts:34_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/providers/celo-provider.ts#L34)

**Parameters:**

| Name | Type | Default |
| :--- | :--- | :--- |
| `existingProvider` | provider | - |
| `wallet` | [ReadOnlyWallet]() | new LocalWallet\(\) |

**Returns:** [_CeloProvider_]()

## Properties

### `Readonly` existingProvider

• **existingProvider**: _provider_

_Defined in_ [_packages/contractkit/src/providers/celo-provider.ts:36_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/providers/celo-provider.ts#L36)

### nonceLock

• **nonceLock**: _Lock_

_Defined in_ [_packages/contractkit/src/providers/celo-provider.ts:34_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/providers/celo-provider.ts#L34)

### wallet

• **wallet**: [_ReadOnlyWallet_]()

_Defined in_ [_packages/contractkit/src/providers/celo-provider.ts:28_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/providers/celo-provider.ts#L28)

## Accessors

### connected

• **get connected**\(\): _any_

_Defined in_ [_packages/contractkit/src/providers/celo-provider.ts:246_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/providers/celo-provider.ts#L246)

**Returns:** _any_

## Methods

### addAccount

▸ **addAccount**\(`privateKey`: string\): _void_

_Defined in_ [_packages/contractkit/src/providers/celo-provider.ts:45_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/providers/celo-provider.ts#L45)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `privateKey` | string |

**Returns:** _void_

### getAccounts

▸ **getAccounts**\(\): _Promise‹string\[\]›_

_Defined in_ [_packages/contractkit/src/providers/celo-provider.ts:57_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/providers/celo-provider.ts#L57)

**Returns:** _Promise‹string\[\]›_

### isLocalAccount

▸ **isLocalAccount**\(`address?`: undefined \| string\): _boolean_

_Defined in_ [_packages/contractkit/src/providers/celo-provider.ts:63_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/providers/celo-provider.ts#L63)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `address?` | undefined \| string |

**Returns:** _boolean_

### removeAccount

▸ **removeAccount**\(`address`: string\): _void_

_Defined in_ [_packages/contractkit/src/providers/celo-provider.ts:53_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/providers/celo-provider.ts#L53)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `address` | string |

**Returns:** _void_

### send

▸ **send**\(`payload`: JsonRpcPayload, `callback`: Callback‹JsonRpcResponse›\): _void_

_Defined in_ [_packages/contractkit/src/providers/celo-provider.ts:70_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/providers/celo-provider.ts#L70)

Send method as expected by web3.js

**Parameters:**

| Name | Type |
| :--- | :--- |
| `payload` | JsonRpcPayload |
| `callback` | Callback‹JsonRpcResponse› |

**Returns:** _void_

### stop

▸ **stop**\(\): _void_

_Defined in_ [_packages/contractkit/src/providers/celo-provider.ts:148_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/providers/celo-provider.ts#L148)

**Returns:** _void_

### supportsSubscriptions

▸ **supportsSubscriptions**\(\): _any_

_Defined in_ [_packages/contractkit/src/providers/celo-provider.ts:250_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/providers/celo-provider.ts#L250)

**Returns:** _any_
