package com.example.suncode.DAO;


import com.example.suncode.db.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class ColumnDAO {

	private final JdbcTemplate jdbcTemplate;

	@Autowired
	public ColumnDAO(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}

	public List<Test> getUniq(String mainColumn, String secondColumn, String thirdColumn) {
		return new ArrayList<>(jdbcTemplate.query("select * " +
						" from tabela_testowa t1 " +
						" where not exists ( " +
						"        select id " +
						"        from tabela_testowa t2 " +
						"       where t2.id <> t1.id and ( " +
						"                   " + secondColumn + " = " + mainColumn + " or " +
						"                   " + thirdColumn + " = " + mainColumn + " " +
						"            ) " +
						"    )",
				new BeanPropertyRowMapper<>(Test.class)));
	}

	public List<Test> getNotUniq(String mainColumn, String secondColumn, String thirdColumn) {
		return new ArrayList<>(jdbcTemplate.query("select * " +
						" from tabela_testowa t1 " +
						" where exists ( " +
						"        select id " +
						"        from tabela_testowa t2 " +
						"       where t2.id <> t1.id and ( " +
						"                   " + secondColumn + " = " + mainColumn + " or " +
						"                   " + thirdColumn + " = " + mainColumn + " " +
						"            ) " +
						"    )",
				new BeanPropertyRowMapper<>(Test.class)));
	}
}
