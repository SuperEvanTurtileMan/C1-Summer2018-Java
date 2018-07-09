package functionsPkg;

public class FunctionClass {
	public void printHelloWorld() {
		System.out.println("Hello world!");
		return;
	}
	
	public int returnANumber(int num1, int num2) {
		return num1 + num2;
	}
	
	public String returnString(String name, int favNum) {
		String bigStr = name + ", this is your favourite number: " + favNum;
		return bigStr;
	}
}
