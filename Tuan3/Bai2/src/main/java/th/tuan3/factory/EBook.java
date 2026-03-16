package th.tuan3.factory;

public class EBook extends Book {

    public EBook(String title,String author,String category){
        super(title,author,category);
    }

    public void display(){
        System.out.println("EBook: " + title);
    }
}