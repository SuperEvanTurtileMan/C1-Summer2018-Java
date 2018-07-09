package codePkg;

public class FastestCountdownEver {
	public int countdown(int num) {
		
		//TODO: Create an if statement once the value of num hits 0. Then, print the value of the num
		// and return the result.
		
		System.out.println(num);
		return num + countdown(num - 1);
	}
}
