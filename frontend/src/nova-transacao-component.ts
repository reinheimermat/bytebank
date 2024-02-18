const elementoFormulario = document.querySelector('.block-nova-transacao form') as HTMLFormElement;
elementoFormulario.addEventListener('submit', function (event) {
    event.preventDefault();

    if (!elementoFormulario.checkValidity()) {
        alert('Erro no formulário');
        return
    }

    const inputTipoTransacao = document.querySelector('#tipoTransacao') as HTMLSelectElement;
    const inputValor = elementoFormulario.querySelector('#valor') as HTMLInputElement;
    const inputData = elementoFormulario.querySelector('#data') as HTMLInputElement;

    let tipoTransacao: TipoTransacao = inputTipoTransacao.value as TipoTransacao;
    let valor: number = inputValor.valueAsNumber;
    let data: Date = new Date(inputData.value); 

    if (tipoTransacao === TipoTransacao.DEPOSITO) {
        saldo += valor;
    } else if (tipoTransacao === TipoTransacao.TRANSFERENCIA || tipoTransacao === TipoTransacao.PAGAMENTO_BOLETO) {
        saldo -= valor;
    } else {
        alert("Transação inválida!")
        return
    }

    elementoSaldo.textContent = saldo.toString();

    const novaTransacao: Transação = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data,
    };

    console.log(novaTransacao);
    elementoFormulario.reset();
});