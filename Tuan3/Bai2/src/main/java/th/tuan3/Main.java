package th.tuan3;


import th.tuan3.decorator.BasicBorrow;
import th.tuan3.decorator.BorrowBook;
import th.tuan3.decorator.ExtendBorrow;
import th.tuan3.decorator.SpecialEdition;
import th.tuan3.factory.Book;
import th.tuan3.factory.BookFactory;
import th.tuan3.singleton.Library;

public class Main {

    public static void main(String[] args) {

        // Singleton: chỉ có 1 Library
        Library library = Library.getInstance();

        // ===== Factory Pattern =====
        Book book1 = BookFactory.createBook("paper",
                "Clean Code", "Robert Martin", "Programming");

        Book book2 = BookFactory.createBook("ebook",
                "Java Basics", "James Gosling", "Programming");

        Book book3 = BookFactory.createBook("audio",
                "Design Patterns", "GoF", "Software Engineering");

        System.out.println("===== BOOK LIST =====");
        book1.display();
        book2.display();
        book3.display();


        // ===== Decorator Pattern =====
        System.out.println("\n===== BORROW BOOK =====");

        BorrowBook borrow1 = new BasicBorrow();
        borrow1.borrow();

        System.out.println();

        BorrowBook borrow2 = new ExtendBorrow(new BasicBorrow());
        borrow2.borrow();

        System.out.println();

        BorrowBook borrow3 =
                new SpecialEdition(
                        new ExtendBorrow(
                                new BasicBorrow()));

        borrow3.borrow();
    }
}