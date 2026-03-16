package th.tuan3.decorator;

public class ExtendBorrow extends BorrowDecorator {

    public ExtendBorrow(BorrowBook borrowBook){
        super(borrowBook);
    }

    public void borrow(){
        super.borrow();
        System.out.println("Extended borrow time");
    }
}