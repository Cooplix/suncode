package com.example.suncode.column;

import com.example.suncode.db.Column;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("table")
public class ColumnController {

	private final ColumnService userService;

	public ColumnController(ColumnService userService) {
		this.userService = userService;
	}


	@GetMapping("/unique/{id}")
	public List<Column> getUniqueColumns(@PathVariable String id) {
		return userService.getUniqueColumns(id);
	}

	@GetMapping("/notUnique/{id}")
	public List<Column> getNotUniqueColumns(@PathVariable String id) {
		return userService.getNotUniqueColumns(id);
	}
}

