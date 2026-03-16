package th.tuan3.decorator;

public abstract class BorrowDecorator implements BorrowBook {

    protected BorrowBook borrowBook;

    public BorrowDecorator(BorrowBook borrowBook){
        this.borrowBook = borrowBook;
    }

    public void borrow(){
        borrowBook.borrow();
    }
}