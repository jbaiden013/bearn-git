<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>

  <groupId>io.github.yas99en.it</groupId>
  <artifactId>javascript-it</artifactId>
  <version>1.0-SNAPSHOT</version>

  <description>A simple IT verifying the basic use case.</description>

  <properties>
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
  </properties>

  <build>
    <plugins>
      <plugin>
        <groupId>@project.groupId@</groupId>
        <artifactId>@project.artifactId@</artifactId>
        <version>@project.version@</version>
        <configuration>
          <engine>javascript</engine>
          <script>
          <![CDATA[
log.info("hello form cdata");

