import { BigDecimal, BigInt } from "@graphprotocol/graph-ts";

export const BI_ZERO = BigInt.fromI32(0);
export const BI_ONE = BigInt.fromI32(1);
export const BD_ZERO = BigDecimal.fromString("0.0");
export const ADDRESS_ZERO = "0x0000000000000000000000000000000000000000";
export const DEFAULT_DECIMALS = BigDecimal.fromString("1000000000000000000");
export const VAULT_DECIMALS = BigDecimal.fromString("1000000");

export function fromWei(
  value: BigInt,
  decimals: BigDecimal = DEFAULT_DECIMALS
): BigDecimal {
  return value.toBigDecimal().div(decimals);
}

export function abs(value: BigDecimal): BigDecimal {
  return value.lt(BD_ZERO) ? value.neg() : value;
}

export function powD(value: BigDecimal, n: BigInt): BigDecimal {
  let bd = value;
  for (let i = BI_ONE; i.lt(n); i = i.plus(BI_ONE)) {
    bd = bd.times(value);
  }
  return bd;
}

export function fromSqrtPriceX96(value: BigInt): BigDecimal {
  // sqrtPriceX96.div(2 ** 96).pow(2)
  const sqrtPriceX96 = new BigDecimal(value);
  const Q96 = new BigDecimal(BigInt.fromI32(2).pow(96));
  return powD(sqrtPriceX96.div(Q96), BigInt.fromI32(2));
}
