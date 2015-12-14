

function customFunctions () {
    return {
        em : function (less, size) {
            return size.value / 16 + "em";
        }
    };
}




module.exports = customFunctions();

