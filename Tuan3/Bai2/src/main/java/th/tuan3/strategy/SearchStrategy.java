package th.tuan3.strategy;

import th.tuan3.factory.Book;

import java.util.List;

public interface SearchStrategy {

    void search(List<Book> books, String keyword);
}