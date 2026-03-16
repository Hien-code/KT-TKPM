package th.tuan3.factory;

public class PaperBook extends Book {

    public PaperBook(String title,String author,String category){
        super(title,author,category);
    }

    public void display(){
        System.out.println("Paper Book: " + title);
    }
}