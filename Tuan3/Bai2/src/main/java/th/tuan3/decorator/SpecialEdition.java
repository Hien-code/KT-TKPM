package th.tuan3.decorator;

public class SpecialEdition extends BorrowDecorator {

    public SpecialEdition(BorrowBook borrowBook){
        super(borrowBook);
    }

    public void borrow(){
        super.borrow();
        System.out.println("Borrow special edition");
    }
}