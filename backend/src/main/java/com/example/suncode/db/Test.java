package com.example.suncode.db;

import lombok.Data;
import lombok.EqualsAndHashCode;
import org.hibernate.Hibernate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.math.BigInteger;
import java.util.Objects;

@Entity
@Table(name = "tabela_testowa")
@Data
public class Test {

    @Id
    @Column(unique = true, nullable = false)
    @EqualsAndHashCode.Include
    private BigInteger id;

    @Column
    private String kolumna1;

    @Column
    private String kolumna2;

    @Column
    private String kolumna3;

    @Column
    private BigInteger kolumna4;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        Test test = (Test) o;
        return id != null && Objects.equals(id, test.id);
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}
