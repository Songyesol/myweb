<%@ page language="java" contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>html/radio.jsp</title>
</head>
<body>
    <%
    String sex = request.getParameter("sex");
    String year = request.getParameter("year");
    String[] subject = request.getParameterValues("subject");
    %>
    <!--checkbox는 여러건을 받기 위해 배열타입으로 변수를 받아와야함
    enhanced for 구문을 통해 배열을 string타입으로 받아와서 출력-->
    <h1>성별: <%=sex%></h1>
    <h1>학년: <%=year%></h1>
    <% 
    for(String sub:subject) {
    %>
    <h1><%=sub%></h1>
    <%
        }
    %>
</body>
</html>