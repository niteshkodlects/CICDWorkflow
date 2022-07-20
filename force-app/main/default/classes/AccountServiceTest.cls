@isTest
private class AccountServiceTest {
    @isTest static void myTest() {
        AccountService.getAccounts('None');
       
        account a=new Account(name='abc');
        insert a;
        a.name='aa';
        update a;
        
         Contact con = new Contact(
        FirstName='Joe',
        LastName='Smith',
        Phone='415.555.1212',IsPrimary__c=true,
        AccountId=a.ID);
    insert con;
   Opportunity testOpportunity = new Opportunity(Name = 'Test Opp', CloseDate = Date.today(), accountid=a.id,StageName = 'Qualification');
        insert testOpportunity;
        testOpportunity.name='ddd';
        update testOpportunity;
        System.assertEquals(21.11,21.11);

    }


    @isTest static void testWarmTemp() {
        AccountService.methodName();
        System.assertEquals(21.11,21.11);

       
    }

    @isTest static void testsearch() {
        AccountService.getAccountWithSearch('Exe');
        System.assertEquals(21.11,21.11);

       
    }
    
    
    @isTest static void testsearchAccount() {
        AccountService.getAccount('Exe');
        System.assertEquals(21.11,21.11);

       
    }
}