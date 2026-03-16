package th.tuan3.factory;

public class AudioBook extends Book {

    public AudioBook(String title, String author, String category) {
        super(title, author, category);
    }

    @Override
    public void display() {
        System.out.println("Audio Book: " + title + " - " + author + " (" + category + ")");
    }
}