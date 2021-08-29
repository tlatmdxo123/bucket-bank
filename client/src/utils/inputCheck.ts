export const isCorrectUserName = (input:string):boolean => {
    return /^[a-zA-Z가-힣ㄱ-ㅎㅏ-ㅣ]*$/.test(input)
}

export const isCorrectPay = (input:string):boolean => {
    return /^[0-9]*$/.test(input)
}

export const isCorrectDate = (input:string):boolean => {
    return /^[0-9]*$/.test(input) && (+input>1 && +input<32)
}