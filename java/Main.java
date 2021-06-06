class Main {
    public static void main(String args []) {
        long m = System.currentTimeMillis();

        int num = 50;
        while(num<1000000){
            System.out.println(num++);
        }
        System.out.println("Finish!");
        System.out.println((double) (System.currentTimeMillis() - m)/1000);
    }
}