package th.tuan3.decorator;

public class BasicBorrow implements BorrowBook {

    public void borrow(){
        System.out.println("Borrowing book normally");
    }
}