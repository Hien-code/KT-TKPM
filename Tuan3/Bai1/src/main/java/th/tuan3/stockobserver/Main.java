package th.tuan3.stockobserver;

public class Main {

    public static void main(String[] args) {

        Stock stock = new Stock();

        Investor investor1 = new Investor("Nhà đầu tư A");
        Investor investor2 = new Investor("Nhà đầu tư B");

        stock.registerObserver(investor1);
        stock.registerObserver(investor2);

        stock.setPrice(100);
        stock.setPrice(120);
    }
}
