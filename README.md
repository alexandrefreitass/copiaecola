## Google Sheets Data Refresh Script

<div align="center">
    <img src="https://github.com/alexandrefreitass/copiaecola/assets/109884524/1ad8672a-094e-41f4-9eae-fa02f0a6ae57" />
</div>

Este repositório contém um script do Google Apps Script projetado para atualizar automaticamente os dados em uma planilha do Google Sheets. O script foi criado para facilitar a atualização de dados que são frequentemente alterados e que precisam ser transferidos de uma planilha oculta para uma planilha visível.

### Funcionalidade

O script `COPIACOLA` realiza as seguintes funções:

- Ativa a planilha chamada 'Dados Principal'.
- Seleciona o intervalo de células de B6 até H100 nesta planilha.
- Ativa a planilha chamada 'Dados Secundario'.
- Seleciona o mesmo intervalo de células nesta segunda planilha.
- Copia os dados do intervalo especificado na planilha 'Dados Principal' para a posição correspondente na planilha 'Dados Secundario', substituindo apenas os valores para evitar a duplicação de qualquer formatação ou fórmula.

### Motivação

Este script foi desenvolvido devido à necessidade de atualizar continuamente os dados que são recebidos em uma planilha oculta do Google Sheets. Com este script, os dados podem ser atualizados com um simples clique de um botão, garantindo que as informações mais recentes estejam sempre disponíveis na planilha 'Dados Secundario'.

### Uso

Para usar este script:
1. Abra sua planilha do Google Sheets.
2. Vá para `Extensões > Apps Script`.
3. Cole o código do script no editor do Apps Script.
4. Salve e nomeie o projeto.
5. Retorne à planilha e configure um gatilho para o script ou execute manualmente conforme necessário.

### Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](https://github.com/alexandrefreitass/copiaecola/blob/master/LICENSE) para mais detalhes.
