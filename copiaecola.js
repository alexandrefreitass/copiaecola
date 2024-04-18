function COPIACOLA() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange('A1').activate();
  spreadsheet.setActiveSheet(spreadsheet.getSheetByName('Dados Principal'), true);
  spreadsheet.getRange('B6:H100').activate();
  spreadsheet.setActiveSheet(spreadsheet.getSheetByName('Dados Secundario'), true);
  spreadsheet.getRange('B6:H100').activate();
  spreadsheet.getRange('Dados Principal!B6:H100').copyTo(spreadsheet.getActiveRange(), SpreadsheetApp.CopyPasteType.PASTE_VALUES, false);
};