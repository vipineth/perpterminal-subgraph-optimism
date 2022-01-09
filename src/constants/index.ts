import { Address, TypedMap } from "@graphprotocol/graph-ts";

export const Network = "optimism";
export const ChainId = "10";
export const Version = "1.0.2";
export const USDCAddress = Address.fromString(
  "0x7F5c764cBc14f9669B88837ca1490cCa17c31607"
);
export const QuoteTokenAddress = Address.fromString(
  "0xC84Da6c8ec7A57cD10B939E79eaF9d2D17834E04"
);
export const UniswapV3FactoryAddress = Address.fromString(
  "0x1F98431c8aD98523631AE4a59f267346ea31F984"
);

export const baseTokenSymbolMap = new TypedMap<Address, string>();

baseTokenSymbolMap.set(
  Address.fromString("0x8C835DFaA34e2AE61775e80EE29E2c724c6AE2BB"),
  "vETH"
);
baseTokenSymbolMap.set(
  Address.fromString("0x86f1e0420c26a858fc203A3645dD1A36868F18e5"),
  "vBTC"
);
