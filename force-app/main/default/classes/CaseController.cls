public with sharing class CaseController {
    

    
    //Added comment

@AuraEnabled(cacheable=true)
    public static list<Account> getCases(){
        return [select id,name from Account];


    }
}