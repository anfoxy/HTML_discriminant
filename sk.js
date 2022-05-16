function isInt(value) {
    var x = parseFloat(value);
    return !isNaN(value) && (x | 0) === x;
}

function square_equation() {
    var a = document.square.square_a.value;
    var b = document.square.square_b.value;
    var c = document.square.square_c.value;
    var sol = document.getElementById("square_sol");

    if(!isInt(a)){
        string = "неправильная запись: " + a;
        string += " (используйте только цифры от 0 до 9 и знаки: +, -)"
    }else {
        if (!isInt(b)) {
            string = "неправильная запись: " + b;
            string += " (используйте только цифры от 0 до 9 и знаки: +, -)"
        } else {
            if (!isInt(c)) {
                string = "неправильная запись: " + c;
                string += " (используйте только цифры от 0 до 9 и знаки: +, -)"
            } else {
                string = "Решение:";
                var d = b * b - 4 * a * c;
                if (d < 0) {
                    string += "корней нет.";
                    add(a,b,c,NaN,NaN);

                } else {
                    if (d === 0) {
                        var  x1 = (-b / (2 * a));
                        string += "<br>x<sub>1</sub> = x<sub>2</sub> = ";
                        string += x1;
                        string += ".";
                        add(a,b,c,x1,x1);
                    } else {
                        var  x1 = (-b / (2 * a) - Math.sqrt(d) / (2 * a));
                        var  x2 = (-b / (2 * a) + Math.sqrt(d) / (2 * a));
                        string += "<br>x<sub>1</sub> = ";
                        string += x1;
                        string += ", x<sub>2</sub> = ";
                        string += x2;
                        string += ".";
                        add(a,b,c,x1,x2);
                    }
                }
            }
        }
    }

    sol.innerHTML = string;
}

function add(a,b,c,x1,x2) {
    var nodet = document.createElement('tr');
    var na = document.createElement('td');
    var nb = document.createElement('td');
    var nc = document.createElement('td');
    var nx1 = document.createElement('td');
    var nx2 = document.createElement('td');

    nodet.setAttribute("id", "checkbox_id");
    nodet.addEventListener("click", function() {
        var checkboxElement = this;
        ell = checkboxElement.closest("tr");
        ell.parentElement.removeChild(ell);
    });
    document.getElementById('table_data').appendChild(nodet);
    na.innerHTML = a;
    nodet.appendChild(na);
    nb.innerHTML = b;
    nodet.appendChild(nb);
    nc.innerHTML = c;
    nodet.appendChild(nc);

    if (isNaN(x1) || isNaN(x2)) {
        nx1.colSpan=2;
        nx1.innerHTML = "корней нет";
        nodet.appendChild(nx1);

    } else {
        nx1.innerHTML = x1;
        nodet.appendChild(nx1);
        nx2.innerHTML = x2;
        nodet.appendChild(nx2);
    }
}