package co.edu;

//import java.sql.PreparedStatement;
//import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class EmpDAO extends DAO {
	//class => 복합적인 데이터를 하나의 변수에 작성 하고 싶을 때
	// 사원번호, 이름, 이메일, 직무 같은 정보를 하나로
	//=> class 작성 : 필드로 선언
	//public void insertEmp(int 
	public void insertEmp(Employee emp) {
		getConnect();
		String sql = "insert into employees(employee_id, last_name, email, job_id, hire_date)"
		                 +  "values(employees_seq.nextval,?,?,?,?)"; //? : 값을 지금 지정하지 않고 psmt에서 지정하겠다.
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, emp.getLastName());
			psmt.setString(2, emp.getEmail());
			psmt.setString(3, emp.getJobId());
			psmt.setString(4, emp.getHireDate());
			int r = psmt.executeUpdate();
			System.out.println(r + "건 입력.");
			
		} catch (SQLException e) {
			e.printStackTrace();
			
		}
	}
	
	
	public List<String> getNames() {
		getConnect();
		String sql = "select first_name from employees"; // employees에서 first_name만 가져옴
		List<String> list = new ArrayList<>();
		try {
			psmt = conn.prepareStatement(sql);
			rs = psmt.executeQuery();
			while (rs.next()) {
				list.add(rs.getString("first_name"));
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect(); 
		}
		return list;
	}

}
