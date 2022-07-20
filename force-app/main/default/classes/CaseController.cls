public class CaseController {
    



@AuraEnabled(cacheable=true)
    public static list<Account> getCases(){
        return [select id,name from Account];


    }
}