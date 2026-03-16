package th.tuan3.strategy;

import th.tuan3.factory.Book;

import java.util.List;

public class SearchByTitle implements SearchStrategy {

    public void search(List<Book> books, String keyword){

        for(Book b : books){

            if(b.getTitle().equalsIgnoreCase(keyword)){
                b.display();
            }

        }
    }
}