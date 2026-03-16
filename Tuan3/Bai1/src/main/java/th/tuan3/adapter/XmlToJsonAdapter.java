package th.tuan3.adapter;

public class XmlToJsonAdapter implements JsonService {

    private XmlService xmlService;

    public XmlToJsonAdapter(XmlService xmlService) {
        this.xmlService = xmlService;
    }

    @Override
    public void processJson(String jsonData) {

        String xmlData = convertJsonToXml(jsonData);

        xmlService.processXml(xmlData);
    }

    private String convertJsonToXml(String json) {

        System.out.println("Converting JSON to XML...");

        return "<data>" + json + "</data>";
    }
}