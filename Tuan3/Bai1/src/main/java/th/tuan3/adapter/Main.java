package th.tuan3.adapter;


public class Main {

    public static void main(String[] args) {

        XmlService xmlService = new XmlService();

        JsonService adapter = new XmlToJsonAdapter(xmlService);

        String json = "{name:'John', age:25}";

        adapter.processJson(json);
    }
}