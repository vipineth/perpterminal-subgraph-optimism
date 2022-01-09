import { BigInt } from "@graphprotocol/graph-ts";

export function _getHourId(timestamp: BigInt): string {
  let hourTimestamp = (timestamp.toI32() / 3600) * 3600;
  return hourTimestamp.toString();
}
export function _getDayId(timestamp: BigInt): string {
  let dayTimestamp = (timestamp.toI32() / 86400) * 86400;
  return dayTimestamp.toString();
}
export function _getWeekId(timestamp: BigInt): string {
  let weekTimestamp = (timestamp.toI32() / 604800) * 604800;
  return weekTimestamp.toString();
}
export function _getMonthlyId(timestamp: BigInt): string {
  let weekTimestamp = (timestamp.toI32() / 2592000) * 2592000;
  return weekTimestamp.toString();
}
