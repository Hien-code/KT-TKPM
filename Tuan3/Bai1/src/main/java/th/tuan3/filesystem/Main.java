package th.tuan3.filesystem;

public class Main {

    public static void main(String[] args) {

        Folder root = new Folder("Root");

        File file1 = new File("document.txt");
        File file2 = new File("image.png");

        Folder subFolder = new Folder("Projects");
        File file3 = new File("project1.java");

        subFolder.add(file3);

        root.add(file1);
        root.add(file2);
        root.add(subFolder);

        root.display("");
    }
}