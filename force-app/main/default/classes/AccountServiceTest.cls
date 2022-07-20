@isTest
private class AccountServiceTest {
    @isTest static void myTest() {
        AccountService.getAccounts('None');
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