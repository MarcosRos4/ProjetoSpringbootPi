FROM openjdk:23

ADD ./target/faculdade-0.0.1-SNAPSHOT.jar app.jar
ENTRYPOINT ["java", "-jar", "app.jar"]