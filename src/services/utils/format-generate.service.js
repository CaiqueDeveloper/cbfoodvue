
export function formatMoney(data){
    return new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(data)
}
