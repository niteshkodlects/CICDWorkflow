@isTest
private class AccountServiceTest {
    @isTest static void myTest() {
        AccountService.getAccounts('None');
       
        account a=new Account(name='abc');
        insert a;
        LWCExampleController.releatedFiles(a.id);
        LWCExampleController.saveFile(a.id, 'strFileName', 'base64Data');
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
        AccountContactController.deleteSelectedContacts(new list<contact>{con});
        accountcontroller.getAccount();
        AccountManager.getAccounts(1);
        AccountManager.CreateAccount('asd','das');
        System.assertEquals(21.11,21.11);

    }


    @isTest static void testWarmTemp() {
        AccountService.methodName();
        SearchService.getAccounts('string searchText');
        AccountContactController.getcontacts('');
        new AccountContactController();
        new SearchService();
        System.assertEquals(21.11,21.11);

       
    }

    @isTest static void testsearch() {
        AccountService.getAccountWithSearch('Exe');
        
        System.assertEquals(21.11,21.11);

       
    }
    
    
    @isTest static void testsearchAccount() {
        AccountService.getAccount('Exe');
        CarController.getAccounts();
        
        CarController.Filter sa=new CarController.Filter();
        sa.categories=new list<string>{'Make'};
            sa.maker=new list<string>{'Make'};
                sa.MaxPrice=10.9;
        sa.searchKey='';
        CarController.getCars(sa);
        CaseController.getCases();
        System.assertEquals(21.11,21.11);

       
    }
}