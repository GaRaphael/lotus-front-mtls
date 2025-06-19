class Money {

  static centsToCoin(value: number) {
    return value.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
  }

  static maskn(value: number) {
    return value.toLocaleString('pt-BR', { minimumFractionDigits: 3 });
  }

  static coinToCents(value: number) {
    return Money.decimal(value) * 100;
  }

  static centsToMaskMoney(value: number) {
    return this.maskMoney(value / 100);
  }

  static maskMoney(value: number) {
    let newvalue = 'R$ ' + Number(value).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    return newvalue.substring(0, newvalue.length - 3) + ',' + newvalue.substring(newvalue.length - 2, newvalue.length)
  }

  static maskMoneyDecimal(value: number) {
    // Converta o valor para uma string sem arredondar
    let stringValue = value.toString();

    // Separe a parte inteira da parte decimal
    let parts = stringValue.split('.');

    // Adicione a formatação desejada para a parte inteira
    let formattedValue = parts[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');

    // Adicione a vírgula e as três casas decimais, se existirem
    if (parts.length > 1) {
      formattedValue += ',' + parts[1].padEnd(3, '0').substring(0, 3);
    } else {
      formattedValue += ',000';  // Adicione zeros decimais se não houver parte decimal
    }

    return 'R$ ' + formattedValue;
  }


  static decimal(n: number) {
    return Math.round(n * 100) / 100
  }

}

export default Money;