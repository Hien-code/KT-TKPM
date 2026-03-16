package th.tuan3.factory;

public class BookFactory {

    public static Book createBook(String type, String title, String author, String category) {

        switch (type.toLowerCase()) {

            case "paper":
                return new PaperBook(title, author, category);

            case "ebook":
                return new EBook(title, author, category);

            case "audio":
                return new AudioBook(title, author, category);

            default:
                throw new IllegalArgumentException("Invalid book type");
        }
    }
}