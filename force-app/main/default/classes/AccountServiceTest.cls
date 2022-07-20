@isTest
private class AccountServiceTest {
    @isTest static void myTest() {
        AccountService.getAccounts('None');
    }


    @isTest static void testWarmTemp() {
        AccountService.methodName();
       
    }

    @isTest static void testsearch() {
        AccountService.getAccountWithSearch('Exe');
       
    }
    
    
    @isTest static void testsearchAccount() {
        AccountService.getAccount('Exe');
       
    }
}