public with sharing class AccountContactController {


    public AccountContactController() {

    
    
    }



    @AuraEnabled
    public static List<contact> getcontacts(string accountName){
        try {
            accountName='%'+accountName+'%';
            return [select Id,Name,FirstName,LastName,Title,Phone,Email from contact where account.name like :accountName];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
       
    }


    @AuraEnabled
    public static void deleteSelectedContacts(List<Contact> contactLst) {
        delete contactLst;
    }
}