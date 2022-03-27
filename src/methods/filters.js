// 調整回傳的日期與數值格式
export function currency (num) {
  const n = Number(num)
  return `NT $${n.toFixed(0).replace(/./g, (c, i, a) => {
    const currency = (i && c !== '.' && ((a.length - i) % 3 === 0) ? `, ${c}`.replace(/\s/g, '') : c)
    return currency
  })}`
}

export function timeConvert (timestamp) {
  const localDate = new Date(timestamp * 1000)
  return localDate.toLocaleDateString()
}
