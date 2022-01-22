import dayjs from "dayjs"

// 現在との時間の差分を計算
export const fromNow = (dateStr: string) => {
  const day = dayjs(dateStr)
  const now = dayjs()
  const diffSec: number = now.diff(day, "second")
  if (diffSec >= 86400) {
    return `${Math.floor(diffSec/86400)}日前`
  }
  if (diffSec >= 3600) {
    return `${Math.floor(diffSec/3600)}時間前`
  }
  return `${Math.floor(diffSec/60)}分前`
}