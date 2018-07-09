package functionsPkg;

public class Main {
	
	public static void main(String [] args) {
		// structure of variable:     <type of var> <name of variable>;
		// structure of variable with value:    <type of var> <name of var> = <value of var>;
		
		// String, int, char, and double - these are some of the different types that
		// we can use.
		String a = "This is variable a.";
		System.out.println(a);

		int num1 = 43;
		int num2 = 3;
		int total = num1 + num2;
		System.out.println(total);
		
		num1 = 2;
		total = num1 + num2;
		System.out.println(total);
		
		// Use this when you want to reference other functions from different classes
		FunctionClass funcVariable = new FunctionClass();
		
		// returnANumber has two parameters: both of them are integers.
		System.out.println(funcVariable.returnANumber(1, 2));
		
		// returnString has two parameters: the first one is a string, the second one is an int
		System.out.println(funcVariable.returnString("Evan", 5));
	}
}
