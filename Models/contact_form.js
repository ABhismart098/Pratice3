
const sequelize = require("../Config/dbconfig");
const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const contact_form = sequelize.define("contact_form", {
        First_Name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Last_Name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        confirm_password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Country: {
            type: DataTypes.STRING,
            allowNull: false
        },
        State: {
            type: DataTypes.VIRTUAL,
            get() {
                return this.getDataValue("State_Code");
            }, 
            allowNull: false
        },
        City: {
            type: DataTypes.STRING,
            get() {
                return this.getDataValue("City_Name"); // Return city name for now
            },
            allowNull: false
        },
        Zip_code: {
            type: DataTypes.STRING,
            allowNull: false
          }
        },{
            // Define a getter method to return the full phone number including country code
        getterMethods: {
            Phone() {
                return `+${this.Country}-${this.Phone}`;
            },
            Country: {
                // Add a virtual field for the country name
                type: DataTypes.VIRTUAL,
                get() {
                    return countryList.getName(this.getDataValue("Country_Code"));
                }
            }
        }

        
            
        
    });
    
    return contact_form;
};
