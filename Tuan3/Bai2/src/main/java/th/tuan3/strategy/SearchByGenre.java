package th.tuan3.strategy;

import th.tuan3.factory.Book;

import java.util.List;

public class SearchByGenre implements SearchStrategy {

    @Override
    public void search(List<Book> books, String keyword) {

        for (Book b : books) {

            if (b.getCategory().equalsIgnoreCase(keyword)) {
                b.display();
            }

        }

    }
}