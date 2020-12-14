<%@ page language="java" contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%>
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>html/exam04.jsp</title>
                </head>
                <body>
                    <%
                        String userId = request.getParameter("user_id");
                        String userBirth= request.getParameter("user_birth");
                        String sex = request.getParameter("sex");
                        String email = request.getParameter("email");
                        String emailChoice=request.getParameter("choice");
                        String phoneNum1=request.getParameter("number1");
                        String phoneNum2 = request.getParameter("number2");
                        String phoneNum3=request.getParameter("number3");
                        String job = request.getParameter("job");
                        String[] hobbys = request.getParameterValues("hobby");
                        String selfInfo = request.getParameter("self_intro");
                    %>
                        <h3>아이디:<%=userId%></h3>
                        <h3>생년월일:<%=userBirth%></h3>
                        <h3>성별:<%=sex%></h3>
                        <h3>E-mail: <%=email%></h3> 
                        <h3>메일수신: <%=emailChoice%></h3> 
                        <h3>핸드폰: <%=phoneNum1%> - <%=phoneNum2%> - <%=phoneNum3%> </h3>
                        <h3>직업: <%=job%></h3>
                        <%
                        for(String hobby:hobbys) {
                        %>
                        <h3>취미: <%=hobby%></h3>
                        <%
                        }
                        %>
                        <h3>자기소개: <%=selfInfo%></h3>
                    </body> 
                </html>