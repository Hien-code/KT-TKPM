package th.tuan3.observer;

public interface Subject {

    void addObserver(Observer o);
    void notifyObservers(String message);
}