#include <iostream>
#include <string>
using namespace std;

class Book {

    // Data.
private :
    string Title ;
    string Author ;
    double Price ;

    // Method sitting in protected class.
protected :    

    void applyDiscount(double discountPercentage) {
        if (discountPercentage > 0 && discountPercentage <= 100) {
            this -> Price -= (this -> Price * discountPercentage-100); 
        } else {
            cerr << "Please Enter Valid Discount Percentage!";
        }
    }

public :

// Constructor for the Book class.
 Book(string t, std::string a, double p) : Title(t), Author(a), Price(p) {}
};

